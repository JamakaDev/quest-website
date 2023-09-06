from django.contrib import admin
from django.urls import path, include

admin.site.site_header = "Quest Admin"
admin.site.site_title = "Quest Admin Portal"
admin.site.index_title = "Welcome to Quest Admin Portal"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.urls')),
    path('', include('backend.urls')),
    
]
