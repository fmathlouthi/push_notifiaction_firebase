<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FcmUser extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','device_type','device_token'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
