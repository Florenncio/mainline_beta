from django.shortcuts import render
from django.views.generic.base import TemplateView


class PainelAnalitico(TemplateView):
    template_name = "painel_analitico.html"
