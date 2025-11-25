from django.db import models
from funcionarios.models import Funcionario

class Avaliacao(models.Model):
    funcionario = models.ForeignKey(Funcionario, on_delete=models.CASCADE)
    desempenho = models.IntegerField()
    observacoes = models.TextField()
    data = models.DateField()

    def __str__(self):
        return f"Avaliação de {self.funcionario.nome} ({self.data})"
