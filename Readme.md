```markdown
# 📚 Catalog Placements Assignment

**Duration:** 70 minutes  
**Language:** Any language except Python is allowed  
**Submission:** Push the code to GitHub and provide the link in the submission form.

---

## 📖 Problem Statement

In this assignment, you will work on a simplified version of **Shamir's Secret Sharing** algorithm.

### Polynomial Representation

Consider an unknown polynomial of degree \( m \). To solve for the coefficients, you need \( m + 1 \) roots, represented as \( k = m + 1 \).

An unknown polynomial of degree \( m \) can be represented as:

\[
f(x) = a_m x^m + a_{m-1} x^{m-1} + \ldots + a_1 x + c
\]

Where:
- \( f(x) \) is the polynomial function
- \( m \) is the degree of the polynomial
- \( a_m, a_{m-1}, \ldots, a_1, c \) are coefficients (real numbers)
- \( a_m \neq 0 \)

Your task is to find the constant term \( c \) of the polynomial using the given roots, provided in a specific JSON format.

---

## 📝 Input Format

The input is provided in JSON format, containing polynomial roots that need to be decoded based on their respective bases. 

### Sample Test Case

```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

### Key Definitions
- **n**: The number of roots provided.
- **k**: The minimum number of roots required to solve for the coefficients.

---

## 🔍 Constraints

- All coefficients \( a_m, a_{m-1}, \ldots, a_1, c \) are positive integers.
- The coefficients are within the range of a 256-bit number.
- The minimum number of roots \( n \) will always be greater than or equal to \( k \).

---

## 🛠️ Output

Print the secret constant term \( c \) for both test cases simultaneously.

### Expected Output Format

```
For Test Case 1:
The secret constant term (c) is: 3

For Test Case 2:
The secret constant term (c) is: 79836264046592
```

---

## 🔑 Checkpoints

1. **Read the Test Case from a Separate JSON File**
   - Parse and read the input provided in JSON format from a separate file.

2. **Decode the Y Values**
   - Decode the Y values that are encoded using different bases.

3. **Find the Secret (C)**
   - Calculate the secret \( c \) using the decoded Y values through any known method (e.g., Lagrange interpolation).

---

## 🚀 Implementation

### Running the Code

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies (if applicable):**
   ```bash
   npm install  # for JavaScript
   ```

3. **Run the Code:**
   ```bash
   node index.js  # replace with your main file name
   ```

---

## 🧪 Test Cases

### Test Case 1
- **Input**: Sample JSON provided above
- **Output**: The constant term \( c \)

### Test Case 2
- **Input**: Provided in the assignment
- **Output**: The constant term \( c \)

---

## 📊 Example Output

```
For Test Case 1:
The secret constant term (c) is: 3

For Test Case 2:
The secret constant term (c) is: 79836264046592
```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

