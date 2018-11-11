import { JSONSchema } from '@ngx-pwa/local-storage';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

import { Network } from '@ngx-pwa/offline';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  online$ = this.network.onlineChanges;

  user: JSONSchema = { firstName: 'Henri', lastName: 'Bergson' };

  getUser$ = this.quoteService.getUsers();

  constructor(private quoteService: QuoteService, protected network: Network) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
    this.quoteService.addUser(this.user);
  }
}
