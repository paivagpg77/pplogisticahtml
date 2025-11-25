from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('cargos/', include('cargos.urls')),
    path('funcionarios/', include('funcionarios.urls')),
    path('movimentacao/', include('movimentacao.urls')),
    path('avaliacoes/', include('avaliacoes.urls')),
]
