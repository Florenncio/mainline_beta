from django.urls import path
from .views import (
    PainelAnalitico
)

app_name='analitico'

urlpatterns = [
    path('painel/', PainelAnalitico.as_view(), name='analitico'),
]