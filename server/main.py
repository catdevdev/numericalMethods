# imports
from flask import Flask
from flask_restful import Api, Resource, reqparse
# math imports
from sympy import *


app = Flask(__name__)
api = Api(app)

math_put_args = reqparse.RequestParser()
math_put_args.add_argument("x", type=float, help="for x variable")
math_put_args.add_argument("h", type=float, help="for h variable")

x = Symbol('x')

class Test1(Resource):
    def post(self):
        
        def expression():            
            return x**2**x
        def takeFirstDerivities():            
            f = expression()
            return f.diff(x)
        def calculateFirstDerivities(x_value):    
            return float(takeFirstDerivities().subs(x, x_value))
        return {"value": calculateFirstDerivities(math_put_args.parse_args().x)}
api.add_resource(Test1, "/")



if __name__ == "__main__":
    app.run(debug=True)
