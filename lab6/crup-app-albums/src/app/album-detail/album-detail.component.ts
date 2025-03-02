import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
    });
  }

  saveAlbum(): void {
    if (this.album) {
      this.albumsService.updateAlbum(this.album).subscribe(updated => {
        this.album = updated;
      });
    }
  }

  returnToAlbums(): void {
    this.router.navigate(['/albums']);
  }
}
