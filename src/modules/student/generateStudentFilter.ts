const generateStudentFilter = (query: any) => {
  const filter: any = {};

  if (query.firstName) {
    filter.firstName = {
      contains: query.firstName,
      mode: "insensitive",
    };
  }
  if (query.lastName) {
    filter.lastName = {
      contains: query.lastName,
      mode: "insensitive",
    };
  }
  if (query.dob) {
    filter.dateOfBirth = query.dob;
  }
  if (query.gender) {
    filter.gender = query.gender;
  }
  if (query.photo) {
    filter.photo = query.photo;
  }
  if (query.gradeLevel) {
    filter.gradeLevel = query.gradeLevel;
  }
  if (query.enrollmentDate) {
    filter.enrollmentDate = query.enrollmentDate;
  }
  if (query.address) {
    filter.address = {
      contains: query.address,
      mode: "insensitive",
    };
  }
  if (query.contactNumber) {
    filter.address = Number(query.contactNumber);
  }
  if (query.email) {
    filter.email = query.email;
  }
  if (query.guardianName) {
    filter.guardianName = query.guardianName;
  }
  if (query.guardianContact) {
    filter.guardianContact = Number(query.guardianContact);
  }
  if (query.studentStatus) {
    filter.studentStatus = query.studentStatus;
  }
  return filter;
};

export default generateStudentFilter;
