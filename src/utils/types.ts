export type User = {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  email: string;
  guilds: Array<PartialGuild>;
};

export type PartialGuild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
};

export type Guild = {
  id: string;
  name: string;
  icon: string;
  banner: string;
  owner_id: string;
  roles: Array<Role>;
  channels: Array<Channel>;
};

export type Role = {
  id: string;
  name: string;
  color: string;
  permissions: string;
  position: number;
  managed: boolean;
};

export type Channel = {
  id: string;
  name: string;
  type: number;
  parent_id: string;
  permission_overwrites: Array<PermissionOverwrite>;
};

export type PermissionOverwrite = {
  id: string;
  type: number;
  allow: string;
  deny: string;
};
