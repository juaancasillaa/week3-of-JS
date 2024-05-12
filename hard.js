function generatePatient(name, ssn) {
    // Private object containing Personally Identifiable Information
    const PII = {
        name: name,
        SSN: ssn
    };

    // Public function to get the name property
    function fetchName() {
        return PII.name;
    }

    // Private function to get the SSN property
    function fetchSSN() {
        return PII.SSN;
    }

    // Return an object with only the public function accessible
    return {
        getName: fetchName,
        getSSN: fetchSSN,
        // Note: We are not exposing getSSN here intentionally
    };
}

// Create a patient object
const patient2 = generatePatient("John", "123-45-6789");


// Output: Undefined
console.log(patient2.names); 
// Output: Undefined
console.log(patient2.ssn);
// Output: John
console.log(patient2.getName()); 
// Output: Undefined (as SSN property is not accessible directly)
console.log(patient2.getSSN());
