"""Print each square on a new line.

A simple square will only be one line::

    >>> dump(0)
    0

    >>> dump(1)
    1

A split square will use four lines::

    >>> dump([0, 1, 0, 1])
    0
    1
    0
    1

A nested split square will use one line per square::

    >>> dump([0, 0, 0, [1, 1, 1, 1]])
    0
    0
    0
    1
    1
    1
    1

Of course, these can nested deeply and still work::

    >>> dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])
    0
    0
    0
    1
    1
    1
    0
    0
    0
    1
    1
    1
    1
"""


def dump(s, i=0, result=[]):
    """Print each square on a new line."""

    if type(s) is int:
        return s

    if i >= len(s):
        return

    if type(s[i]) is int:
        print(str(s[i]))
    elif type(s[i]) is list:
        dump(s[i])

    return dump(s, i + 1, result)


if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; NICE JOB!\n")
