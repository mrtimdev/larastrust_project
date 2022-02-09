<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;

class CategoryResquest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'code' => [
                'required',
                'min:3',
                'max:8',
                'alpha_dash',
                'unique:categories,code'
            ],
            'name' => [
                'required',
                'min:4',
                'max:255',
                'string',
                'unique:categories,name'
            ]
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'The category :attribute field can not be blank value',
            'code.required' => 'The category :attribute field is required',
            'code.alpha_dash' => 'The category :attribute must only contain letters, numbers, dashes and underscores.',
        ];
    }
}
