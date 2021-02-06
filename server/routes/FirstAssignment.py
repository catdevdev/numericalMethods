# imports
from flask_restful import Resource, reqparse
# math imports
from sympy import *

math_put_args = reqparse.RequestParser()
math_put_args.add_argument("x", type=float, help="for x variable")
math_put_args.add_argument("h", type=float, help="for h variable")

x = Symbol('x')




class FirstAssignment(Resource):
    def post(self):
        def expression():
            return x**2**x

        def takeFirstDerivities():
            f = expression()
            return f.diff(x)

        def calculateFirstDerivities(x_value):
            return float(takeFirstDerivities().subs(x, x_value))

        def calculateFirstWith4Points(x0, h, expression):
            return 

        return {"value": calculateFirstDerivities(math_put_args.parse_args().x)}