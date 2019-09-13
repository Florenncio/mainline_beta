from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('operacional/', include(('operacional.urls'), namespace='operacional')),
    path('analitico/', include(('analitico.urls'), namespace='analitico')),
]
