from rest_framework.serializers import ModelSerializer
from ..models import Notes

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class NoteSerializer(ModelSerializer):

    class Meta:
        model = Notes
        fields = '__all__'





class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims

        token['user'] = user.username
        # ...

        return token
