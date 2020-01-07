import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  note: Note;
  noteList : Array<Note>

  constructor(private noteService: NotesService ) {
    //console.log('appcomponent');
    this.note = new Note();
    this.noteList = [];
  }

  ngOnInit() {
    this.noteService.getNotes().subscribe(res =>{
      //console.log('note list from server', res);
      this.noteList = res;
     },
     error => {
       //console.log('error from server');
       this.errMessage = error.message;
     })
  }
  takeNote() {
    this.noteList.push(this.note)
    this.noteService.addNote(this.note).subscribe(addedNote =>{
    },error=>{
      let index = this.noteList.findIndex(note=> note.id === this.note.id);
      this.noteList.splice(index, 1)
      this.errMessage = error.message;
    })
  }
}