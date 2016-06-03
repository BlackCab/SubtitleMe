from twisted.web.server import Site
from twisted.web.resource import Resource
from twisted.internet import reactor
from smtplib import SMTP_SSL
from email.MIMEMultipart import MIMEMultipart


class SubTitleMail(Resource):
    isLeaf = True
    def render_GET(self, request):
        pass

    def render_POST(self, request):
        print request.content.read()
        addr='kupi-geroin@yandex.ru'
        msg=MIMEMultipart()
        msg['From']=msg['To']=addr
        request.setHeader("Access-Control-Allow-Origin", "*")
        smtp = SMTP_SSL('smtp.yandex.ru:465')
        smtp.login('kupi-geroin@yandex.ru','48919o6')
        smtp.sendmail(addr,addr,msg.as_string())
        return 'Your mail sent.' 


factory = Site(SubTitleMail())
reactor.listenTCP(8000, factory)
reactor.run()
