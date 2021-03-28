def dump_line(result, array, add_line_end=True):
    for elm in array:
        result += elm
        result += '    '

    result = result.rstrip()

    if add_line_end is True:
        result+= '\n'

    return result


def check_int(s):
    if s[0] in ('-', '+'):
        return s[1:].isdigit()
    return s.isdigit()


def arithmetic_arranger(problems, show_results=False):
    import re

    if len(problems) > 5:
        return "Error: Too many problems."

    L = None
    R = None

    lefts = []
    rights = []
    separators = []
    results = []

    for problem in problems:
        p = list(filter(lambda x: x is not None, re.split('(\+)|(-)|(\/)|(\*)', problem.replace(' ', ''))))

        L = p[0]
        op = p[1]
        if op is None or op not in ['+', '-']:
            return "Error: Operator must be '+' or '-'."
        R = p[2]

        if check_int(L) is False or check_int(R) is False:
            return "Error: Numbers must only contain digits."
        if len(L) > 4 or len(R) > 4:
            return "Error: Numbers cannot be more than four digits."

        result = None
        if show_results is True:
            result = str(eval(L + op + R))

        if len(L) > len(R):
            lefts.append('  ' + L)
            rights.append(op + ' ' + (' ' * (len(L) - len(R))) + R)
            separators.append('-' * (len(L) + 2))

            if show_results is True:
                results.append(' ' * (len('  ' + L) - len(result)) + str(eval(L + op + R)))


        if len(L) <= len(R):
            lefts.append('  ' + (' ' * (len(R) - len(L))) + L)
            rights.append(op + ' ' + R)
            separators.append('-' * (len(R) + 2))

            if show_results is True:
                results.append(' ' * ((len(R) + 2) - len(result)) + str(eval(L + op + R)))

    res = ''
    res = dump_line(res, lefts)
    res = dump_line(res, rights)
    if show_results is True:
        res = dump_line(res, separators)
        res = dump_line(res, results, add_line_end=False)
    else:
        res = dump_line(res, separators, add_line_end=False)
    
    return res
