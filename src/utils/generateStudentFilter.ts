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
  if (query.semester) {
    filter.semester = query.semester;
  }
  if (query.startDate && query.endDate) {
    filter.enrollmentDate = {
      gte: new Date(query.startDate),
      lte: new Date(query.endDate)
    };
  }
  else if(query.startDate){
    filter.enrollmentDate ={
      gte: new Date(query.startDate)
    }
  }
  else if(query.endDate){
    filter.enrollmentDate ={
      lte: new Date(query.endDate)
    }
  }
  if (query.address) {
    filter.address = {
      contains: query.address,
      mode: "insensitive"
    };
  }
  if (query.contactNumber) {
    filter.address = query.contactNumber;
  }
  if (query.email) {
    filter.email = {
      contains: query.email,
      mode: "insensitive"
    };
  }
  if (query.guardianName) {
    filter.guardianName = query.guardianName;
  }
  if (query.guardianContact) {
    filter.guardianContact = query.guardianContact;
  }
  if (query.studentStatus) {
    filter.studentStatus = query.studentStatus;
  }
  return filter;
};

export default generateStudentFilter;
