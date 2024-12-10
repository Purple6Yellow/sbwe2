from . models import Visitor


class VisitorMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Voer deze code uit voordat de view wordt aangeroepen
        response = self.get_response(request)
        
        # Zorg dat de gegevens alleen worden opgeslagen bij niet-geauthenticeerde requests of specifieke views
        if not request.user.is_authenticated:
            ip_address = self.get_ip(request)
            page = request.path
            user_agent = request.META.get('HTTP_USER_AGENT', '')

            # Sla het bezoek op
            Visitor.objects.create(ip_address=ip_address, page=page, user_agent=user_agent)

        return response

    def get_ip(self, request):
        """Haalt het IP-adres van de bezoeker op, houdt rekening met proxies"""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip