<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        for($i=0 ; $i < 50 ; $i++){
            DB::table('products')->insert([
                'title'              => $faker->text(30),
                'description'  => $faker->text(250),
                'image'          => $faker->image('public/storage/images', 250, 200),
                'price'            => $faker->numberBetween(20, 100)
                ]);
            }
    }
}
