import React, { useMemo } from "react";
import { Divider, Typography } from "antd";
import { UserInfoFragment } from "lib/graphql/generated";
import { UserCard, UserAvatar, Title, ConnectWithStripeButton } from "./style";

const { Paragraph, Text } = Typography;

interface Props {
  user: UserInfoFragment;
  viewerIsUser: boolean;
}

const UserProfile = ({ user, viewerIsUser }: Props): JSX.Element => {
  const additionalDetailsSection = useMemo(
    () =>
      viewerIsUser ? (
        <>
          <Divider />
          <Title level={4}>Additional Details</Title>
          <Paragraph>
            Interested in becoming a TinyHouse host? Register with your Stripe
            account!
          </Paragraph>
          <ConnectWithStripeButton type="primary">
            Connect with Stripe
          </ConnectWithStripeButton>
          <Paragraph type="secondary">
            TinyHouse uses<span> </span>
            <a
              href="https://stripe.com/en-US/connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe
            </a>
            <span> </span>to help transfer your earnings in a secure and truster
            manner.
          </Paragraph>
        </>
      ) : null,
    [viewerIsUser]
  );

  return (
    <UserCard>
      <UserAvatar size={100} src={user.avatar} />
      <Divider />
      <Title level={4}>Details</Title>
      <Paragraph>
        Name: <Text strong>{user.name}</Text>
      </Paragraph>
      <Paragraph>
        Contact: <Text strong>{user.contact}</Text>
      </Paragraph>
      {additionalDetailsSection}
    </UserCard>
  );
};

export default UserProfile;
