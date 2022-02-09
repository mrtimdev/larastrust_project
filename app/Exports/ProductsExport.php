<?php

namespace App\Exports;

use App\Models\Product\Products;
use Maatwebsite\Excel\Concerns\FromCollection;

class ProductsExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Products::all();
    }
}
