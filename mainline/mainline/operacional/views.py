from django.shortcuts import render
from django.views.generic.base import TemplateView


class PainelOperacional(TemplateView):
    template_name = "painel_operacional.html"