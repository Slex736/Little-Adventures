from django.shortcuts import render

# Create your views here.
def homepage(request):
    return render(request, 'Homepage/Homepage.html')

def booking(request):
    return render(request, 'Homepage/Booking.html')

def aboutus(request):
    return render(request, 'Homepage/AboutUs.html')