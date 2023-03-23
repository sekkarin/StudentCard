import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';

const app = express();
const PORT = 8000;
// EJS setup
app.use(expressLayouts);

// Setting the root path for views directory
app.set('views', path.join(__dirname, 'views'));

// Setting the view engine
app.set('view engine', 'ejs');

interface IId_Card {
  institutionNameEng: string;
  institutionNameThai: string;
  dateOfBirth: string;
  id: string;
  fname: string;
  lname: string;
  branch: string;
  major: string;
  studentId: string;
  dateOfIssue: string;
  dateOfExpir: string;
  calDoDays(): string;
  calclassYear(): string;
  // displayData():[];
}
class CardStudent implements IId_Card {
  institutionNameEng: string;
  institutionNameThai: string;
  dateOfBirth: string;
  id: string;
  fname: string;
  lname: string;
  branch: string;
  major: string;
  studentId: string;
  dateOfIssue: string;
  dateOfExpir: string;
  constructor(
    institutionNameEng: string,
    institutionNameThai: string,
    dateOfBirth: string,
    id: string,
    fname: string,
    lname: string,
    branch: string,
    major: string,
    studentId: string,
    dateOfIssue: string,
    dateOfExpir: string

  ) {
    this.institutionNameEng = institutionNameEng;
    this.institutionNameThai = institutionNameThai;
    this.dateOfBirth = dateOfBirth;
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.branch = branch
    this.major = major;
    this.studentId = studentId;
    this.dateOfIssue = dateOfIssue;
    this.dateOfExpir = dateOfExpir;
  }
  public showCard(): any {
    app.get('/', (req, res) => res.render('index', {
      institutionNameEng: this.institutionNameEng,
      institutionNameThai: this.institutionNameThai,
      dateOfBirth: this.dateOfBirth,
      id: this.id,
      fname: this.fname,
      lname: this.lname,
      branch: this.branch,
      major: this.major,
      studentId: this.studentId,
      dateOfIssue: this.dateOfIssue,
      dateOfExpir: this.dateOfExpir,
      year:this.calclassYear()

    }));
    app.listen(PORT, () => {
      return `Server is running at http://localhost:${PORT}`;
    });

  }
  public calDoDays(): string {
    return "hello";
  }
  public calclassYear(): string {
    let curr_year = new Date().getFullYear();
    let year = this.studentId.slice(0, 2);
    year = `25${year}`;
    return `${curr_year - (parseInt(year)-543)}`;
  }
}

let CardStudent_1 = new CardStudent("Nakhon Pathom Rajabhat University", "มหาวิทยาลัยราชภัฏนครปฐม", "13/09/2543", "52656265626565", "ศักรินทร์", "สิงหอยู่", "วิศวกรรมซอฟต์แวร์", "วิทยาศาสตร์และเทคโนโลยี", "644259021", "13/02/2000", "13/02/2577");
CardStudent_1.showCard();
CardStudent_1.calclassYear();
