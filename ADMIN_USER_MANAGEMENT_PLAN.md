# Admin User Management Enhancement Plan

## Overview
This plan outlines the implementation of two critical admin dashboard features:
1. **Delete Users**: Allow admins to delete clients and nannies from the system
2. **User Type Conversion**: Allow admins to convert users between nanny and client types (for registration errors)

---

## 1. Backend API Endpoints

### 1.1 Delete User Endpoint
**Endpoint**: `DELETE /api/admin/users/:userId`

**Request**:
```typescript
DELETE /api/admin/users/:userId
Headers: {
  Authorization: "Bearer <admin_token>"
}
```

**Response**:
```typescript
{
  success: boolean;
  message: string;
  deletedUser: {
    id: string;
    email: string;
    type: 'nanny' | 'client';
    deletedAt: string;
  };
}
```

**Business Logic**:
- Verify admin permissions (Super Admin or Admin with delete permissions)
- Check for active bookings/relationships before deletion
- Option 1: Hard delete (permanent removal)
- Option 2: Soft delete (mark as deleted, retain data for audit)
- Handle cascading deletes (bookings, reviews, etc.) or prevent deletion if active relationships exist
- Log deletion action for audit trail

### 1.2 Convert User Type Endpoint
**Endpoint**: `POST /api/admin/users/:userId/convert-type`

**Request**:
```typescript
POST /api/admin/users/:userId/convert-type
Headers: {
  Authorization: "Bearer <admin_token>",
  Content-Type: "application/json"
}
Body: {
  targetType: 'nanny' | 'client';
  reason?: string; // Optional reason for conversion
}
```

**Response**:
```typescript
{
  success: boolean;
  message: string;
  convertedUser: {
    id: string;
    email: string;
    previousType: 'nanny' | 'client';
    newType: 'nanny' | 'client';
    convertedAt: string;
  };
}
```

**Business Logic**:
- Verify admin permissions
- Validate that conversion is valid (nanny ↔ client)
- Check for conflicting data:
  - If converting nanny → client: Check for active bookings as nanny
  - If converting client → nanny: Check for active bookings as client
- Migrate user data:
  - Update user type field
  - Preserve core user data (email, name, etc.)
  - Handle type-specific data:
    - Nanny-specific: certifications, availability, rates
    - Client-specific: family info, preferences, addresses
- Create audit log entry
- Optionally notify user via email about the change

### 1.3 Get User Details Endpoint (Enhanced)
**Endpoint**: `GET /api/admin/users/:userId`

**Response** (Enhanced to show conversion eligibility):
```typescript
{
  id: string;
  email: string;
  name: string;
  type: 'nanny' | 'client';
  createdAt: string;
  lastLogin: string;
  canBeDeleted: boolean;
  canBeConverted: boolean;
  activeBookings: number;
  conversionWarnings?: string[]; // e.g., "User has 3 active bookings"
}
```

---

## 2. Frontend Implementation

### 2.1 UI Components Location
Based on the admin dashboard structure shown, add functionality to:
- **Client Management Page** (`/admin/client-management`)
- **Nanny Management Page** (`/admin/nanny-management`)

### 2.2 New Components to Create

#### 2.2.1 DeleteUserDialog Component
**Location**: `src/components/admin/DeleteUserDialog.tsx`

**Features**:
- Confirmation dialog with user details
- Warning about consequences (active bookings, data loss)
- Reason field (optional, for audit trail)
- Loading state during deletion
- Success/error toast notifications

**Props**:
```typescript
interface DeleteUserDialogProps {
  user: {
    id: string;
    name: string;
    email: string;
    type: 'nanny' | 'client';
    activeBookings?: number;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}
```

#### 2.2.2 ConvertUserTypeDialog Component
**Location**: `src/components/admin/ConvertUserTypeDialog.tsx`

**Features**:
- Confirmation dialog showing current and target type
- Warning about data migration
- Reason field (optional)
- Preview of what will change
- Loading state during conversion
- Success/error toast notifications

**Props**:
```typescript
interface ConvertUserTypeDialogProps {
  user: {
    id: string;
    name: string;
    email: string;
    currentType: 'nanny' | 'client';
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}
```

#### 2.2.3 UserActionsDropdown Component
**Location**: `src/components/admin/UserActionsDropdown.tsx`

**Features**:
- Dropdown menu with actions (Edit, Convert Type, Delete)
- Disabled states based on user eligibility
- Icons for each action

### 2.3 API Service Functions
**Location**: `src/services/adminApi.ts` (or similar)

```typescript
// Delete user
export const deleteUser = async (userId: string, reason?: string) => {
  // API call implementation
};

// Convert user type
export const convertUserType = async (
  userId: string, 
  targetType: 'nanny' | 'client',
  reason?: string
) => {
  // API call implementation
};

// Get user details with eligibility info
export const getUserDetails = async (userId: string) => {
  // API call implementation
};
```

### 2.4 React Query Hooks
**Location**: `src/hooks/useAdminUsers.ts`

```typescript
// Mutation for deleting user
export const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      // Invalidate queries, show toast
    }
  });
};

// Mutation for converting user type
export const useConvertUserType = () => {
  return useMutation({
    mutationFn: convertUserType,
    onSuccess: () => {
      // Invalidate queries, show toast
    }
  });
};
```

### 2.5 Integration Points

#### Update Client Management Table
- Add "Actions" column with dropdown menu
- Include "Convert to Nanny" and "Delete" options
- Show eligibility indicators (badges/icons)

#### Update Nanny Management Table
- Add "Actions" column with dropdown menu
- Include "Convert to Client" and "Delete" options
- Show eligibility indicators (badges/icons)

---

## 3. Database Schema Considerations

### 3.1 User Table Updates
```sql
-- Add soft delete support
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP NULL;
ALTER TABLE users ADD COLUMN deleted_by VARCHAR(255) NULL;
ALTER TABLE users ADD COLUMN deletion_reason TEXT NULL;

-- Add conversion tracking
ALTER TABLE users ADD COLUMN previous_type VARCHAR(50) NULL;
ALTER TABLE users ADD COLUMN converted_at TIMESTAMP NULL;
ALTER TABLE users ADD COLUMN converted_by VARCHAR(255) NULL;
ALTER TABLE users ADD COLUMN conversion_reason TEXT NULL;
```

### 3.2 Audit Log Table
```sql
CREATE TABLE admin_actions_log (
  id UUID PRIMARY KEY,
  admin_id UUID REFERENCES users(id),
  action_type VARCHAR(50), -- 'DELETE_USER', 'CONVERT_USER_TYPE'
  target_user_id UUID REFERENCES users(id),
  details JSONB,
  reason TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3.3 Data Migration Strategy
When converting user types:
- **Nanny → Client**: 
  - Preserve: Basic profile, contact info
  - Archive: Certifications, availability, rates (store in `user_archived_data`)
  - Clear: Nanny-specific active data
- **Client → Nanny**:
  - Preserve: Basic profile, contact info
  - Archive: Family info, preferences (store in `user_archived_data`)
  - Clear: Client-specific active data

---

## 4. Security & Permissions

### 4.1 Permission Levels
- **Super Admin**: Full access (delete, convert)
- **Admin**: May need specific permissions:
  - `users.delete` - Permission to delete users
  - `users.convert` - Permission to convert user types

### 4.2 Validation Rules
1. **Delete Restrictions**:
   - Cannot delete users with active bookings
   - Cannot delete own admin account
   - Require confirmation for deletion

2. **Conversion Restrictions**:
   - Cannot convert users with active bookings (or require booking cancellation first)
   - Cannot convert to same type
   - Validate data integrity before conversion

### 4.3 Audit Trail
- Log all delete and conversion actions
- Include: admin ID, timestamp, user ID, action type, reason
- Store in audit log table
- Make audit log viewable in admin dashboard

---

## 5. User Experience Considerations

### 5.1 Confirmation Dialogs
- **Delete**: Show strong warning with consequences
- **Convert**: Show preview of changes and data migration impact

### 5.2 Feedback
- Loading states during operations
- Success messages with details
- Error messages with actionable guidance
- Toast notifications for all actions

### 5.3 Data Visibility
- Show user eligibility status in tables (badges/icons)
- Tooltips explaining why actions are disabled
- Preview of what will happen before confirmation

### 5.4 Email Notifications (Optional)
- Notify user when their account is deleted
- Notify user when their account type is converted
- Include reason and next steps

---

## 6. Implementation Phases

### Phase 1: Backend Foundation
1. Create delete user endpoint
2. Create convert user type endpoint
3. Add database schema updates
4. Implement audit logging
5. Add permission checks
6. Write unit tests

### Phase 2: Frontend Components
1. Create DeleteUserDialog component
2. Create ConvertUserTypeDialog component
3. Create UserActionsDropdown component
4. Create API service functions
5. Create React Query hooks
6. Add UI components to client/nanny management pages

### Phase 3: Integration & Testing
1. Integrate components into admin dashboard
2. Test delete functionality
3. Test conversion functionality
4. Test permission restrictions
5. Test error handling
6. End-to-end testing

### Phase 4: Polish & Documentation
1. Add loading states and animations
2. Improve error messages
3. Add tooltips and help text
4. Update admin documentation
5. Create user guide for admins

---

## 7. Error Handling

### 7.1 Delete Errors
- User has active bookings → Show booking details, suggest cancellation first
- Permission denied → Show appropriate message
- Network error → Retry mechanism
- User not found → Handle gracefully

### 7.2 Conversion Errors
- Active bookings exist → Show booking details
- Data migration failure → Rollback mechanism
- Invalid conversion → Clear error message
- Permission denied → Show appropriate message

---

## 8. Testing Checklist

### 8.1 Delete User
- [ ] Delete user with no active bookings
- [ ] Attempt to delete user with active bookings (should fail)
- [ ] Delete user as Super Admin
- [ ] Attempt delete as Admin without permission (should fail)
- [ ] Verify audit log entry
- [ ] Verify soft delete (if implemented)
- [ ] Verify cascading deletes (if applicable)

### 8.2 Convert User Type
- [ ] Convert nanny to client (no active bookings)
- [ ] Convert client to nanny (no active bookings)
- [ ] Attempt conversion with active bookings (should fail or warn)
- [ ] Verify data migration
- [ ] Verify audit log entry
- [ ] Verify user can login with new type
- [ ] Test conversion as different admin levels

### 8.3 UI/UX
- [ ] Confirmation dialogs work correctly
- [ ] Loading states display properly
- [ ] Success/error toasts appear
- [ ] Disabled states show correctly
- [ ] Tooltips provide helpful information
- [ ] Responsive design works on mobile

---

## 9. Future Enhancements

1. **Bulk Operations**: Delete/convert multiple users at once
2. **Scheduled Deletion**: Schedule user deletion for future date
3. **Data Export**: Export user data before deletion
4. **Conversion Preview**: More detailed preview of what will change
5. **Reversion**: Ability to revert a conversion
6. **Advanced Filtering**: Filter users by eligibility for actions

---

## 10. Notes & Considerations

- **POPIA Compliance**: Ensure deletion and data handling comply with South African POPIA regulations
- **Data Retention**: Consider legal requirements for data retention
- **Backup Strategy**: Ensure backups before permanent deletions
- **Performance**: Consider impact on large user bases
- **Rate Limiting**: Prevent abuse of delete/convert endpoints

---

## File Structure Summary

```
src/
├── components/
│   └── admin/
│       ├── DeleteUserDialog.tsx
│       ├── ConvertUserTypeDialog.tsx
│       └── UserActionsDropdown.tsx
├── services/
│   └── adminApi.ts
├── hooks/
│   └── useAdminUsers.ts
└── pages/
    └── admin/
        ├── ClientManagement.tsx (update)
        └── NannyManagement.tsx (update)
```

---

## Estimated Timeline

- **Phase 1 (Backend)**: 3-5 days
- **Phase 2 (Frontend)**: 3-4 days
- **Phase 3 (Integration)**: 2-3 days
- **Phase 4 (Polish)**: 1-2 days

**Total**: ~10-14 days for complete implementation


