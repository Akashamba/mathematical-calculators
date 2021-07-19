export default function calculateRoots (a, b, c) {
    
    return [((-b) + ((b**2) - (4*a*c))**(1/2))/(2*a), ((-b) - ((b**2) - (4*a*c))**(1/2))/(2*a)]
}


// a=1  b=1 c=-6

// -b = -1