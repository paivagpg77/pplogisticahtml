from django.db import models
from cargos.models import Cargo

class Funcionario(models.Model):
    nome = models.CharField(max_length=150)
    idade = models.IntegerField()
    cargo = models.ForeignKey(Cargo, on_delete=models.CASCADE)
    data_admissao = models.DateField()

    def __str__(self):
        return self.nome
