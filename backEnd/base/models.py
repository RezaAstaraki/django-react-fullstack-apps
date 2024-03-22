from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Notes(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    added_date = models.DateField( auto_now=False, auto_now_add=True)
    updated_date = models.DateField( auto_now=True, auto_now_add=False)
    body =models.TextField()
    class Meta:
        pass
        # fields = '__all__'
   


    def __str__(self):
        return f'note : {self.body[:50]} by {self.user.username}'

    # def get_absolute_url(self):
    #     return reverse("_detail", kwargs={"pk": self.pk})

