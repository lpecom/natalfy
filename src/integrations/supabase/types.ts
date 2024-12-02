export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      campaign_metrics: {
        Row: {
          campaign_id: string | null
          clicks: number
          conversions: number
          created_at: string
          date: string
          id: string
          impressions: number
          spent: number
        }
        Insert: {
          campaign_id?: string | null
          clicks?: number
          conversions?: number
          created_at?: string
          date: string
          id?: string
          impressions?: number
          spent?: number
        }
        Update: {
          campaign_id?: string | null
          clicks?: number
          conversions?: number
          created_at?: string
          date?: string
          id?: string
          impressions?: number
          spent?: number
        }
        Relationships: [
          {
            foreignKeyName: "campaign_metrics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          budget: number
          clicks: number
          conversions: number
          created_at: string
          id: string
          impressions: number
          name: string
          spent: number
          status: string
          updated_at: string
        }
        Insert: {
          budget?: number
          clicks?: number
          conversions?: number
          created_at?: string
          id?: string
          impressions?: number
          name: string
          spent?: number
          status?: string
          updated_at?: string
        }
        Update: {
          budget?: number
          clicks?: number
          conversions?: number
          created_at?: string
          id?: string
          impressions?: number
          name?: string
          spent?: number
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          name: string
          parent_id: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          name: string
          parent_id?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string
          parent_id?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      creative_metrics: {
        Row: {
          actual_cpc: number | null
          campaign_id: string | null
          clicks: number | null
          conversion_rate: number | null
          created_at: string | null
          delivery_status: string | null
          headline: string
          id: string
          learning_status: string | null
          media_url: string
          spent: number | null
          vctr: number | null
        }
        Insert: {
          actual_cpc?: number | null
          campaign_id?: string | null
          clicks?: number | null
          conversion_rate?: number | null
          created_at?: string | null
          delivery_status?: string | null
          headline: string
          id?: string
          learning_status?: string | null
          media_url: string
          spent?: number | null
          vctr?: number | null
        }
        Update: {
          actual_cpc?: number | null
          campaign_id?: string | null
          clicks?: number | null
          conversion_rate?: number | null
          created_at?: string | null
          delivery_status?: string | null
          headline?: string
          id?: string
          learning_status?: string | null
          media_url?: string
          spent?: number | null
          vctr?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "creative_metrics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      offer_links: {
        Row: {
          created_at: string | null
          id: string
          offer_id: string | null
          scraped: boolean | null
          url: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          offer_id?: string | null
          scraped?: boolean | null
          url: string
        }
        Update: {
          created_at?: string | null
          id?: string
          offer_id?: string | null
          scraped?: boolean | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "offer_links_offer_id_fkey"
            columns: ["offer_id"]
            isOneToOne: false
            referencedRelation: "offers"
            referencedColumns: ["id"]
          },
        ]
      }
      offers: {
        Row: {
          created_at: string | null
          funnel_type: string
          id: string
          name: string
          product_cost: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          funnel_type: string
          id?: string
          name: string
          product_cost?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          funnel_type?: string
          id?: string
          name?: string
          product_cost?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          category_id: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          price: number
          slug: string
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          price?: number
          slug: string
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      publisher_metrics: {
        Row: {
          campaign_id: string | null
          clicks: number | null
          conversions: number | null
          created_at: string | null
          id: string
          site: string
          status: string | null
          vctr: number | null
          viewable_impressions: number | null
        }
        Insert: {
          campaign_id?: string | null
          clicks?: number | null
          conversions?: number | null
          created_at?: string | null
          id?: string
          site: string
          status?: string | null
          vctr?: number | null
          viewable_impressions?: number | null
        }
        Update: {
          campaign_id?: string | null
          clicks?: number | null
          conversions?: number | null
          created_at?: string | null
          id?: string
          site?: string
          status?: string | null
          vctr?: number | null
          viewable_impressions?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "publisher_metrics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never