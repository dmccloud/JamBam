type UserType = React.Context<{
  userAccessToken: string;
  updateUserAccessToken: () => void;
}>;

export default UserType;
