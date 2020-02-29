<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\models\coffees;

class CoffeeController extends Controller
{
    public function index()
    {
        $coffee = coffees::all();
        return $coffee;
    }
    
    public function create(Request $request)
    {
        $coffee = coffees::create($request->all());
        return $coffee;
    }

    public function update(Request $request ,$id)
    {
        $coffee = coffees::find($id);
        $coffee->update($request->all());
        return $coffee;
    }

    public function delete($id)
    {
        $coffee = coffees::find($id)->delete();
        return $coffee;
    }

    public function saveFile(Request $request)
    {
        $path = $request->file('file')->store('file');
        return  response()->json(['path'=>$path], 200);
    }

}
