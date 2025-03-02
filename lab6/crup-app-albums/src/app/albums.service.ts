import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumsUrl}/${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumsUrl, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    if (!album.id) {
      throw new Error('Album must have an id to be updated');
    }
    return this.http.put<Album>(`${this.albumsUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<{}> {
    return this.http.delete(`${this.albumsUrl}/${id}`);
  }

  getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.albumsUrl}/${albumId}/photos`);
  }
}
