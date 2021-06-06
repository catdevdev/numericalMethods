# imports
from flask_restful import Resource, reqparse
# math imports
import math
from sympy import *

math_put_args = reqparse.RequestParser()
math_put_args.add_argument("a", type=float, help="for 1_endpoint variable")
math_put_args.add_argument("b", type=float, help="for 2_endpoint variable")
math_put_args.add_argument("x0", type=float, help="for x0 variable")
math_put_args.add_argument("y0", type=float, help="for y0 variable")
math_put_args.add_argument("h", type=float, help="for h variable")
math_put_args.add_argument("expression", type=str, help="for n variable")

x = Symbol('x')


class CalculateExpressions:
    def __init__(self, a, b, x0, y0, h, expression):
        self.a = a
        self.b = b
        self.x0 = x0
        self.y0 = y0
        self.h = h
        self.expression = expression

    def calculate_expression(self, x, y):
        return eval(self.expression)

    def calculate(self):
        n = (self.b - self.x0) / self.h
        array = []
        i = 0
        while(i < n-1):
            array.append({x: array[i].x + self.h, y: 0})
            y_new = array[i].y + self.h * \
                self.calculate_expression(array[i].x, array[i].y)
            array[i+1].y = array[i].y + (self.h/2) * (self.calculate_expression(
                arrya[i].x, array[i].y) + self.calculate_expression(array[i+1].x, y_new))
            i = i + 1

        return array


class route(Resource):

    def __init__(self):
        self.calculateExpressions = CalculateExpressions(
            math_put_args.parse_args().a, math_put_args.parse_args().b, math_put_args.parse_args().x0, math_put_args.parse_args().y0, math_put_args.parse_args().h, math_put_args.parse_args().expression)

    def post(self):
        return {"array":  self.calculateExpressions.calculate()}
