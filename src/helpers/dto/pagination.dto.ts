export class Pagination {
    constructor(limit:number, page:number, total:number){
        this.limit = limit
        this.page = page;
        this.total =total;
    }

    readonly limit : number;
    readonly page:  number;
    readonly total: number;
}


export class PaginationResponse<T>{
    constructor(data:T[], pagination:Pagination ){
        this.data = data;
        this.pagination = pagination
    }

    readonly data:T[];
    readonly pagination: Pagination
}

