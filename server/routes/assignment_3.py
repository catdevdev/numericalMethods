# imports
from flask_restful import Resource, reqparse
# math imports
import math
from sympy import *

math_put_args = reqparse.RequestParser()
math_put_args.add_argument("a", type=float, help="for x variable")
math_put_args.add_argument("b", type=float, help="for h variable")
math_put_args.add_argument("n", type=float, help="for n variable")
math_put_args.add_argument("expression", type=str, help="for n variable")

x = Symbol('x')


class CalculateExpressions:
    def __init__(self, a, b, n, expression):
        self.a = a
        self.b = b
        self.n = n
        self.expression = expression

    def calculate_expression(self, x):
        return eval(self.expression)

    def calculate_with_trapezia_method(self):
        sum = 0
        delta_x = (self.b - self.a) / self.n

        i = 0
        while i < self.n:
            i = i + 1
            sum += self.calculate_expression(self.a + i * delta_x) + \
                self. calculate_expression(self.a + (i + 1) * delta_x)

        return sum * delta_x / 2

    def calculate_with_simpsons_method(self):
        if (self.n % 2 != 0):
            return

        sum = self.calculate_expression(
            self.a) + self.calculate_expression(self.b)
        delta_x = (self.b - self.a) / self.n

        i = 1
        while i < self.n:
            i += 2
            sum += 4*self.calculate_expression(self.a + i * delta_x)

        i = 2
        while i < self.n - 1:
            i += 2
            sum += 2*self.calculate_expression(self.a + i * delta_x)

        return sum * delta_x / 3


class assignment_2(Resource):

    def __init__(self):
        self.calculateExpressions = CalculateExpressions(
            math_put_args.parse_args().a, math_put_args.parse_args().b, math_put_args.parse_args().n, math_put_args.parse_args().expression)

    def post(self):

        print(type(math_put_args.parse_args().a))
        val1 = self.calculateExpressions.calculate_with_trapezia_method()
        val2 = self.calculateExpressions.calculate_with_simpsons_method()
        error = abs(self.calculateExpressions.calculate_with_trapezia_method(
        ) - self.calculateExpressions.calculate_with_simpsons_method())

        return {"trapezia_method":  str(round(val1, 3)), "simpson_method": str(round(val2, 3)), "error": str(round(error, 3))}
