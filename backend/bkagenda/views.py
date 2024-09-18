from django.shortcuts import render
from django.utils import timezone
from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from . models import Post
from django.views.generic import ListView, DetailView

from datetime import date


def post_list(request):
    posts= Post.objects.filter(datum__lte=date.today())
    return render(request, 'post_list.html', {'posts':posts})

def post_detail(request, pk): 
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'post_inhoud.html', {'post':post})   


# posts = Post.objects.all()
