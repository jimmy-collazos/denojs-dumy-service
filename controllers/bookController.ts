import { Context } from "https://deno.land/x/abc@v1.0.0-rc8/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Book } from '../models/bookModel.ts';
/**
 * Books collection
 * Example of item:
 *  { id: '1', title: 'Some title', author: 'Some Author', pages: 500 }
 */
let books: Book[] = [];

export const get_all_books = (ctx: Context) => {
  return ctx.json(books, 200);
}

export const get_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  return book
    ? ctx.json(book, 200)
    : ctx.string(`Book not found (${id})`, 404);
}

export const create_book = async (ctx: Context) => {
  const { title, author, pages } = await ctx.body();

  // validate data & types of data
  const id = v4.generate();
  const book = { id, title, author, pages };
  books.push(book);

  return ctx.json(book, 201);
}

export const delete_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  
  if (book) {
    books = books.filter((b: Book) => b.id !== id);
    return ctx.json(book, 200);
  }
  return ctx.string(`Book not found (${id})`, 404);
}
