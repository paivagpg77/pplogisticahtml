from django.db import models
from funcionarios.models import Funcionario

class Movimentacao(models.Model):
    funcionario = models.ForeignKey(Funcionario, on_delete=models.CASCADE)
    setor_origem = models.CharField(max_length=100)
    setor_destino = models.CharField(max_length=100)
    data = models.DateField()

    def __str__(self):
        return f"{self.funcionario.nome} - {self.setor_origem} → {self.setor_destino}"
