fib0 = 0;
fib1 = 1;

function fibonacci(fib0, fib1) {
    if (fib0 < 100) {
        fib0 = fib0 + fib1;
        fib1 = fib0 + fib1;
        fibonacci(fib0, fib1);
    }
    else {
        console.log(fib0);
    }
}

fibonacci(fib0, fib1);