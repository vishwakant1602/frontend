export type User = {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  email: string;
  guilds: Array<Guild>;
};

export type Guild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
};
