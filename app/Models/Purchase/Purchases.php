<?php

namespace App\Models\Purchase;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchases extends Model
{
    use HasFactory;
    protected $table = 'purchases';
    protected $fillable = [
        'reference_no',
        'grand_total',
        'order_tax',
        'total_quantity',
        'discount',
        'payment_term',
        'note',
    ];
    protected $dates = ['created_at', 'updated_at'];
}
