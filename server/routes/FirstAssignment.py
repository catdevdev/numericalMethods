# imports
from flask_restful import Resource, reqparse
# math imports
import math
from sympy import *

math_put_args = reqparse.RequestParser()
math_put_args.add_argument("x0", type=float, help="for x variable")
math_put_args.add_argument("h", type=float, help="for h variable")

x = Symbol('x')


class CalculateExpressions:
    def __init__(self, x0, h, expression):
        self.x0 = x0
        self.h = h
        self.expression = expression

    def getXBySub(self, sub):
        return self.x0 + self.h * sub

    def calculateExpression(self, argument):
        return self.expression.subs(x, argument)

    # expressions

    def _3_point_procedure(self):
        return str(self.calculateExpression(self.getXBySub(1)) - self.calculateExpression(self.getXBySub(-1))/(2*self.h))

    def _4_point_procedure_a(self):
        return str((-2*self.calculateExpression(self.getXBySub(-1))-3*self.calculateExpression(self.getXBySub(0)) + 6*self.calculateExpression(self.getXBySub(1))-self.calculateExpression(self.getXBySub(2)))/(6 * self.h))

    def _4_point_procedure_b(self):
        return str((-11*self.calculateExpression(self.getXBySub(0))+18*self.calculateExpression(self.getXBySub(1)) - 9*self.calculateExpression(self.getXBySub(2))+2*self.calculateExpression(self.getXBySub(3)))/(6 * self.h))

    def _5_point_procedure_a(self):
        return str((self.calculateExpression(self.getXBySub(-2))-8*self.calculateExpression(self.getXBySub(-1))+8*self.calculateExpression(self.getXBySub(1))-self.calculateExpression(self.getXBySub(2)))/(12 * self.h))

    def _5_point_procedure_b(self):
        return str((-3*self.calculateExpression(self.getXBySub(-1))-10*self.calculateExpression(self.getXBySub(0))+18*self.calculateExpression(self.getXBySub(1))-6*self.calculateExpression(self.getXBySub(2))*self.calculateExpression(self.getXBySub(3)))/(12 * self.h))

    def _5_point_procedure_c(self):
        return str((-25*self.calculateExpression(self.getXBySub(0))+48*self.calculateExpression(self.getXBySub(1))-36*self.calculateExpression(self.getXBySub(2))+16*self.calculateExpression(self.getXBySub(3))-3*self.calculateExpression(self.getXBySub(4)))/(12 * self.h))

    def _2nd_deriv_procedure(self):
        return str((self.calculateExpression(self.getXBySub(1))-2*self.calculateExpression(self.getXBySub(0))+self.calculateExpression(self.getXBySub(-1)))/(self.h ** 2))


class FirstAssignment(Resource):

    def __init__(self):
        self.calculateExpressions = CalculateExpressions(
            math_put_args.parse_args().x0, math_put_args.parse_args().h, x)

    def post(self):
        print(type(math_put_args.parse_args().x0))
        return {"3_point_procedure": self.calculateExpressions._3_point_procedure(), "4_point_procedure_a": self.calculateExpressions._4_point_procedure_a(),
                "4_point_procedure_b": self.calculateExpressions._4_point_procedure_b(), "5_point_procedure_a": self.calculateExpressions._5_point_procedure_a(), "5_point_procedure_b": self.calculateExpressions._5_point_procedure_b(), "5_point_procedure_c": self.calculateExpressions._5_point_procedure_c(), "2nd_deriv_procedure": self.calculateExpressions._2nd_deriv_procedure()}
