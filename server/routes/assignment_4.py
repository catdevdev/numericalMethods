# imports
from flask_restful import Resource, reqparse
# math imports
import math
from sympy import *

math_put_args = reqparse.RequestParser()
math_put_args.add_argument("a", type=int, help="for 1_endpoint variable")
math_put_args.add_argument("b", type=int, help="for 2_endpoint variable")
math_put_args.add_argument("e", type=float, help="for e variable")
math_put_args.add_argument("expression", type=str, help="for n variable")

x = Symbol('x')


class CalculateExpressions:
    def __init__(self, a, b, e, expression):
        self.a = a
        self.b = b
        self.e = e
        self.expression = expression

    def calculate_expression(self, x):
        return eval(self.expression)

    def calculate_with_bisection_method(self):
        iterations = 0
        iterations_max = math.log((self.b - self.a)/self.e) / math.log(2)
        while iterations <= iterations_max:
            midpoint = (self.a + self.b) / 2
            if self.calculate_expression(midpoint) == 0 or self.b - self.a < 2 * self.e:
                return {"midpoint": str(round(midpoint, 3)), "iterations": iterations}
            if self.calculate_expression(self.a) * self.calculate_expression(midpoint) < 0:
                self.b = midpoint
            else:
                self.a = midpoint
            iterations += 1


class assignment_4(Resource):

    def __init__(self):
        self.calculateExpressions = CalculateExpressions(
            math_put_args.parse_args().a, math_put_args.parse_args().b, math_put_args.parse_args().e, math_put_args.parse_args().expression)

    def post(self):
        return {"bisection_method":  self.calculateExpressions.calculate_with_bisection_method()}
