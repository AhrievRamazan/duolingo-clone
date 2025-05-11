import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/api/webhooks/stripe',
  // Можно добавить другие публичные маршруты
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth();
});
