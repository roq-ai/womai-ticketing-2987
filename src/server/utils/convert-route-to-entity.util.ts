const mapping: Record<string, string> = {
  events: 'event',
  organizations: 'organization',
  tickets: 'ticket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
