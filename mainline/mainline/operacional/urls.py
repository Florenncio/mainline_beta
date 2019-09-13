from django.urls import path
from .views import (
    PainelOperacional,
)

app_name='operacional'

urlpatterns = [
    path('painel/', PainelOperacional.as_view(), name='painel_operacional'),
]