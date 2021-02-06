""" imports """
from flask import Flask
from flask_restful import Api, Resource
""" math imports """
from sympy import *

app = Flask(__name__)
api = Api(app)

class Test1(Resource):
    def get(self):
        x = Symbol('x')
        f = x**2
        f_prime = f.diff(x)
        print(f_prime.subs(x, 10))
        return {"test": int(f_prime.subs(x, 10))}


api.add_resource(Test1, "/")



if __name__ == "__main__":
    app.run(debug=True)
