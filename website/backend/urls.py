from django.urls import path, include

# from .views import UserViewSet

# from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from backend.views import (
    RoutesView,
    SignUpView,
    ProductsView,
    UserView
)

# router = DefaultRouter()
# router.register('users', UserViewSet, basename='users')
    # path('admin/', include(router.urls), name='users'),    


urlpatterns = [

    path('', RoutesView, name='get_routes'),
    path('user/', UserView, name='user'),
    path('products/', ProductsView, name='products'),
    path('auth/signup/', SignUpView, name='signup'),

    path('token/obtain/', TokenObtainPairView.as_view(), name='token_obtain'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]